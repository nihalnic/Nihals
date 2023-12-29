import { Button } from "../ui/button";
import { Input } from "../ui/input";
const EmailBox = () => {
  return (
    <div className="p-8 border border-zinc-800 rounded-3xl">
      <div className="flex items-center gap-2">
        <img src="/assets/icons/mail.svg" alt="" className="block invert-white opacity-60" />
        <p className="base-semibold base-medium tracking-widest">Stay up to date</p>
      </div>
      <p className="mt-3 mb-6 small-regular text-zinc-500">
        Get notified when I publish something new, and <br /> unsubscribe at any time.
      </p>
      <div className="flex gap-3 items-center">
        <Input placeholder="Email address" className="shad-input rounded-lg"></Input>
        <Button className="h-12 bg-zinc-700 hover:bg-zinc-600 tracking-wide px-4 py-0">Join</Button>
      </div>
    </div>
  );
};

export default EmailBox;
