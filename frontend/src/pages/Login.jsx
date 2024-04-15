import LoginForm from "@/components/LoginForm";
import Container from "@/components/ui/Container";

export default function Login() {
  return (
    <Container page>
      <h1 className="text-center text-3xl font-semibold">Login</h1>
      <LoginForm />
    </Container>
  );
}
