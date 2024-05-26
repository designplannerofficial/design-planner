import { 
    useCallback, 
    useState 
} from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    BackgroundVariant,
    Panel,
    MiniMap,
    Controls,
    Edge,
    Node,
    Connection
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '@/components/canvas/CustomNode';
import LabelModal from '@/components/canvas/LabelModal';

const initialNodes = [
    {
        id: 'node-0',
        type: 'customNode',
        data: { label: 'Node 0' },
        position: { x: 250, y: 5 },
    }
];

const initialEdges: Edge<any>[] = [];

const nodeTypes = { customNode: CustomNode };

export default function Canvas() {

    const [variant, setVariant] = useState<string>('dots');
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isModalOpen, setModalOpen] = useState(false);
    const [newEdge, setNewEdge] = useState<Edge<any> | null>(null);


    const onConnect = useCallback(
        (params: Connection) => {
            setNewEdge(params as Edge<any>);
            setModalOpen(true);
        },
        []
    );

    const handleSaveLabel = useCallback(
        (label: string) => {
            setEdges((eds) => addEdge({
                ...newEdge,
                label: label,
                type: 'smoothstep'
            } as Edge<any>, eds));
            setModalOpen(false);
            setNewEdge(null);
        },
        [newEdge, setEdges]
    );

    const handleModalClose = useCallback(() => {
        setModalOpen(false);
        setNewEdge(null);
    }, []);

    const handleChange = useCallback((
        nodeId: string,
        field: string,
        value: any
    ) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    node.data = {
                        ...node.data,
                        [field]: value,
                    };
                }
                return node;
            })
        );
    }, []);

    const addNode = useCallback(() => {
        const newNode = {
            id: `node-${nodes.length}`,
            type: 'customNode',
            data: { label: `Node ${nodes.length}` },
            position: { x: Math.random() * 200, y: Math.random() * 200 }
        };
        setNodes((nds) => nds.concat(newNode));
    }, [nodes, setNodes]);

    return (
        <div className='w-full h-[88vh]'>
            <ReactFlow
                nodes={nodes.map((node: Node<any, string | undefined>) => {
                    if (node.type === 'customNode') {
                        if (node.data['onChange']) {
                            node.data['onChange'] = null;
                        }
                        node.data.onChange = (field: string, value: any) => {
                            handleChange(node.id, field, value);
                        }
                    }
                    return node;
                })}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                defaultViewport={{x:0, y: 0, zoom:-1}}
                fitView={true}
                attributionPosition='top-right'
            >
                <Background color="#ccc" variant={variant as BackgroundVariant} />
                <Panel position={'top-left'}>
                    <button className={`px-3 py-1 rounded mr-1 bg-white text-black text-xs font-semibold ${variant === "dots" ? "opacity-100" : "opacity-70"}`} onClick={() => setVariant('dots')}>dots</button>
                    <button className={`px-3 py-1 rounded mr-1 bg-white text-black text-xs font-semibold ${variant === "lines" ? "opacity-100" : "opacity-70"}`} onClick={() => setVariant('lines')}>lines</button>
                    <button className={`px-3 py-1 rounded mr-1 bg-white text-black text-xs font-semibold ${variant === "cross" ? "opacity-100" : "opacity-70"}`} onClick={() => setVariant('cross')}>cross</button>
                    <button className="px-3 py-1 rounded bg-green-500 text-white text-xs font-semibold" onClick={addNode}>Add Node</button>
                </Panel>
                <MiniMap nodeStrokeWidth={3} zoomable pannable />
                <Controls />
                <LabelModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSaveLabel}
                />
            </ReactFlow>
        </div>
    );
}

