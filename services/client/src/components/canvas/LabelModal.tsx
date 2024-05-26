import { useState } from 'react';
import Modal from 'react-modal';

const LabelModal = ({ isOpen, onClose, onSave }: {
    isOpen: boolean,
    onClose: () => void;
    onSave: (label: string) => void;
}) => {
    const [label, setLabel] = useState('');

    const handleSave = () => {
        onSave(label);
        setLabel('');
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Label Input"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: "3rem 4rem"
                }
            }}
        >
            <div className='flex flex-col items-start gap-2'>
                <h2 className='font-medium text-sm mb-2'>Enter Connection Label</h2>
                <input
                    className='border border-primary rounded px-4 py-2 min-w-80'
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
                <div className='flex items-center justify-end w-full gap-1'>
                    <button className='px-4 py-2 rounded border border-primary hover:bg-secondary font-medium text-sm' onClick={onClose}>Cancel</button>
                    <button className='px-4 py-2 rounded border text-primary-foreground bg-primary hover:bg-primary font-medium text-sm' onClick={handleSave}>Save</button>
                </div>
            </div>
        </Modal>
    );
};

export default LabelModal;
