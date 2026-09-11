import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled variant={"default"} size="lg">
        <Spinner data-icon="inline-start" />
        Creating...
      </Button>
    </div>
  )
}
