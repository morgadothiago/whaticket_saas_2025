import { Loader2 } from "lucide-react"

export const Icons = {
  spinner: Loader2,
  logo: ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Add your logo SVG path here */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
} 