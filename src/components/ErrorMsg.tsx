import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorMsg = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 p-3 roudned-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
