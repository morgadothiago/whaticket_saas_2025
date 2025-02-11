import { LockIcon, MailIcon, UserIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  password?: boolean;
  isProfile?: boolean;
}

const TextInput: React.FC<InputProps> = ({ label, error, password, isProfile, ...props }) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <div className={`flex items-center border rounded-md px-3 py-2 ${error ? 'border-red-500 focus-within:ring-red-500' : 'border-input focus-within:ring-ring'
        } focus-within:ring-2 focus-within:ring-offset-2 transition-colors`}>
        {password ? (
          <LockIcon className="h-4 w-4 mr-2 text-muted-foreground" />
        ) : isProfile ? (
          <UserIcon className="h-4 w-4 mr-2 text-muted-foreground" />
        ) : (
          <MailIcon className="h-4 w-4 mr-2 text-muted-foreground" />
        )}
        <input
          type={password ? "password" : "text"}
          className="flex-1 border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;