import * as React from "react";
import { useForm } from "react-hook-form";
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formValues) => {
    console.log(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-md space-y-4"
    >
      <div>
        <label>Email</label>
        <div className="relative">
          <UserIcon className="absolute left-0 top-0.5 size-4 translate-x-1/2 translate-y-1/2" />
          <Input
            type="text"
            {...register("email", { required: true })}
            className="pl-8"
          />
        </div>
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <div className="relative">
          <LockIcon className="absolute left-0 top-0.5 size-4 translate-x-1/2 translate-y-1/2" />
          <Input
            type={"password" + (showPassword ? "" : "-hidden")}
            {...register("password", { required: true })}
            className="pl-8"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-0.5 -translate-x-1/2 translate-y-1/2"
          >
            {showPassword ? (
              <EyeIcon className="size-4" />
            ) : (
              <EyeOffIcon className="size-4" />
            )}
          </button>
        </div>
        {errors.password && <span>This field is required</span>}
      </div>
      <Button className="w-full">LOGIN</Button>
    </form>
  );
}
