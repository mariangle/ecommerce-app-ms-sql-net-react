import Container from "@/components/ui/Container";

export default function Banner() {
  return (
    <div className="hidden border-b bg-slate-950 py-3 text-white xl:block">
      <Container className="flex items-center justify-between">
        <p className="ml-0 flex-1 text-left text-xs">
          SECURE PAYMENT THROUGH PAYPAL
        </p>
        <p className="ml-0 flex-1 text-center text-xs">
          FREE SHIPPING ON ORDERS OVER 1.200,00 KR
        </p>
        <p className="flex-1 text-right text-xs">100% AUTHENTIC</p>
      </Container>
    </div>
  );
}
