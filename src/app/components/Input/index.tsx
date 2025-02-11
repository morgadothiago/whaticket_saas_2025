
import { Input } from '@/components/ui/input';
import { LockIcon, LockOpenIcon, MailIcon } from 'lucide-react';
import React from 'react';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  password?: boolean;
  placeholder?: string;
}

const TextInput: React.FC<InputProps> = ({ label, password, placeholder, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1">{label}</label>}
      <div className="flex items-center border rounded p-2">
        {
          password ? (
            <LockIcon className="mr-2" />
          ) : (
            <MailIcon className="mr-2" />
          )
        }
        <Input type={password ? 'password' : 'text'} placeholder={placeholder} className="flex-1 outline-none" {...props} />
      </div>
    </div>
  );
};

export default TextInput;
