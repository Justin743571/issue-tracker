import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/edit/${issueId}`} legacyBehavior>
      <Button>
        <Pencil2Icon />
        Edit Issue
      </Button>
    </Link>
  );
};

export default EditIssueButton;
