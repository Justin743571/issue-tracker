import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFliter from "./IssueStatusFliter";

const IssueActions = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFliter />
      <Link href="/issues/new" legacyBehavior>
        <Button>New Issue</Button>
      </Link>
    </Flex>
  );
};

export default IssueActions;
