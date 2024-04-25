import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "./ui/button";
import FormTextInput from "./FormTextInput";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-3/5">
        <FormTextInput
          form={form}
          label="Username"
          name="username"
          placeholder="Enter your username"
        />
        <FormTextInput
          form={form}
          label="Email"
          name="email"
          placeholder="Enter your email"
        />
        <FormTextInput
          form={form}
          label="Password"
          name="password"
          placeholder="Enter your password"
        />

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
