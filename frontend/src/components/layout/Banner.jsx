import Container from "@/components/ui/Container";

export default function Banner() {
  return (
    <div className="hidden md:block py-4 bg-gray-50 gap-8 border-b">
      <Container className="justify-between flex items-center">
        <p className="text-xs">
          <span className="text-sky-600">SECURE</span> PAYMENT THROUGH PAYPAL
        </p>
        <p className="text-xs">
          <span className="text-sky-600">FREE SHIPPING</span> ON ORDERS OVER
          1.200,00 KR
        </p>
        <p className="text-xs">
          <span className="text-sky-600">100%</span> AUTHENTIC
        </p>
      </Container>
    </div>
  );
}
