import RefreshIcon from "@mui/icons-material/Refresh";

interface ButtonProps {
  text: string;
  loading: boolean;
  disabled: boolean;
}

const ButtonLoader = ({ text, loading = false, disabled }: ButtonProps) => {
  return (
    <button
      className="bg-amber-500 hover:bg-amber-600 font-roboto border-none outline-none rounded-lg text-lg text-white min-w-48 min-h-9 cursor-pointer disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed px-10 py-1 w-full mt-3"
      type="submit"
      disabled={disabled}
    >
      {!loading ? text : <RefreshIcon className="animate-spin" />}
    </button>
  );
};

export default ButtonLoader;
