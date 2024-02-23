"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "@/components/auth/CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas/AuthSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { login } from "@/actions/auth";
import { ErrorMsg } from "@/components/ErrorMsg";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const user = useCurrentUser();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (user) {
    redirect("/");
  }

  const loginHandler = (values: z.infer<typeof LoginSchema>) => {
    setError("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        form.resetField("password");
      });
    });
  };

  return (
    <div className="flex-1 flex">
      <CardWrapper
        headerLabel="Sign in to Motti"
        backButtonHref="/auth/register"
        backButtonLabel="Don't have an account?"
      >
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(loginHandler)}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative py-2">
                        <Input
                          {...field}
                          disabled={isPending}
                          id="login_email"
                          type="email"
                          className="px-6 pt-6 focus:outline-none focus:ring-0 peer invalid:border-b-1 z-50"
                          placeholder=""
                        />
                        <FormLabel
                          onClick={() =>
                            document.getElementById("login_email")?.focus()
                          }
                          className="absolute cursor-auto text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-0 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                        >
                          Email
                        </FormLabel>
                        <FormMessage className="text-start" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative py-2">
                        <Input
                          {...field}
                          disabled={isPending}
                          id="login_password"
                          type="password"
                          className="px-6 pt-6 focus:outline-none focus:ring-0 peer invalid:border-b-1 z-50"
                          placeholder=""
                        />
                        <FormLabel
                          onClick={() =>
                            document.getElementById("login_password")?.focus()
                          }
                          className="absolute cursor-auto text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-0 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                        >
                          Password
                        </FormLabel>
                        <FormMessage className="text-start" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <ErrorMsg message={error} />
            <Button disabled={isPending} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default LoginPage;
