import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

type LinkProps = {
  slug: string;
  originalLink: string;
  onDelete: () => void;
};

export default function Link(props: LinkProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="gap-3 flex flex-row h-12">
            <div className="bg-white flex flex-row justify-between rounded-lg w-96 px-3 pt-3">
                <div>
                    <p>{`http://localhost:4000/t/${props.slug}`}</p>
                    <p className="text-gray-500 text-xs">{props.originalLink}</p>
                </div>
                <div>
                    {copied && <span className="text-green-500 text-xs">Copied!</span>}
                </div>
            </div>
            <CopyToClipboard text={`http://localhost:4000/t/${props.slug}`} onCopy={handleCopy}>
                <button className="border-solid my-auto rounded-md border-blue-400 text-white bg-blue-400 h-12 border-2 p-2">
                    Copy Link
                </button>
            </CopyToClipboard>
            <button onClick={props.onDelete} className="border-solid my-auto rounded-md border-blue-400 text-white bg-blue-400 h-12 border-2 p-2">
                Delete Link
            </button>
        </div>
    );
}

