import { LockIcon, MailIcon, UserIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  password?: boolean;
  isProfile?: boolean;
}

const TextInput: React.FC<InputProps> = ({ label, error, password, isProfile, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className={`flex items-center border rounded-md p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}>
        {password ? (
          <LockIcon className="mr-2 text-gray-500" />
        ) : isProfile ? (
          <UserIcon className="mr-2 text-gray-500" />
        ) : (
          <MailIcon className="mr-2 text-gray-500" />
        )}
        <input
          type={password ? "password" : "text"}
          className={`w-full p-2 border-none outline-none ${error ? 'text-red-500' : 'text-gray-900'}`}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;