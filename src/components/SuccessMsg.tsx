import { CheckCircledIcon } from "@radix-ui/react-icons";

export const SuccessMsg = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-primary/15 p-3 roudned-md flex items-center gap-x-2 text-sm text-primary">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
