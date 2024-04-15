import Container from "@/components/ui/Container";

import { DELIVERY_THRESHOLD } from "@/store/reducers/cartSlice";
import { useCurrency } from "@/hooks/useCurrency";
import { CheckIcon } from "lucide-react";

export default function Banner() {
  const { formatPrice } = useCurrency();
  return (
    <div className="hidden border-b bg-slate-950 py-3 text-white xl:block">
      <Container className="flex items-center justify-between">
        <div className="ml-0 flex flex-1 items-center justify-start gap-2 text-left text-xs">
          <CheckIcon className="size-4 text-emerald-500" />
          Secure payment with PayPal
        </div>
        <div className="ml-0 flex flex-1 items-center justify-center gap-2 text-left text-xs">
          <CheckIcon className="size-4 text-emerald-500" />
          Free shipping on orders over {formatPrice(DELIVERY_THRESHOLD)}
        </div>
        <div className="ml-0 flex flex-1 items-center justify-end gap-2 text-left text-xs">
          <CheckIcon className="size-4 text-emerald-500" />
          100% money-back guarantee
        </div>
      </Container>
    </div>
  );
}
