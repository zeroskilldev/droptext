import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";


type dropDialogProps = {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  dropLink: null | string
}

export function DropDialog(props: dropDialogProps) {
  const [ isCopied, setIsCopied ] = useState<boolean>(false);


  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Your drop is ready.</DialogTitle>
          <DialogDescription>
            Share your drop using the link below.
          </DialogDescription>
        </DialogHeader>
        {props.dropLink && (
          <div className="w-full text-center">
            <input
              value={props.dropLink}
              readOnly
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
            <div className="flex justify-center items-center my-4">
              {!isCopied ? <Button
                onClick={() => {
                    navigator.clipboard.writeText(props.dropLink!);
                    setIsCopied(true);
                  }
                }
              >
                Copy Link
              </Button> :
                <Button disabled>Copied</Button>
              }
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
