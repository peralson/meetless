import Text from "./Text";
import Error from "./Error";

export default function Field({
  children,
  label,
  errorMessage,
}: {
  children: React.ReactNode;
  label: string;
  errorMessage: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <Text>{label}</Text>}
      {children}
      {errorMessage && <Error>{errorMessage}</Error>}
    </div>
  );
}
