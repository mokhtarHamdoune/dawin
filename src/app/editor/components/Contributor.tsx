import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export type ContributorProps = {
  first_name: string;
  last_name: string;
  image?: string;
};

export default function Contributor(props: ContributorProps) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar className="h-8 w-8">
        <AvatarImage src={props.image} alt="@shadcn" />
        <AvatarFallback className="text-xs">
          {props.first_name.charAt(0).toUpperCase()}
          {props.last_name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <small className="text-sm font-medium leading-none">
        {props.first_name} {props.last_name}
      </small>
    </div>
  );
}
