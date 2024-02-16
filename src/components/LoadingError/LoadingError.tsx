import { LoadingErrorProps } from "./LoadingError.props";

export const LoadingError = ({ isLoading, isError }: LoadingErrorProps) => {
  return (
    <>
      {isLoading && (
        <span className="loading loading-spinner loading-sm"></span>
      )}
      {isError && <p className="text-lg font-bold">Error</p>}
    </>
  );
};
