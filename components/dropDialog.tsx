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


type dropDialogProps = {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  dropLink: null | string
}

export function DropDialog(props: dropDialogProps) {
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
            <div className="flex justify-center items-center mt-2">
              <Button
                onClick={() =>
                  navigator.clipboard.writeText(props.dropLink!)
                }
              >
                Copy Link
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
