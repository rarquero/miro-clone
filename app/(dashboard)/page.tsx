"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { MiroList } from "./_components/miro-list";

interface DashBoardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
};

const DashBoardPage = ({
    searchParams,
}: DashBoardPageProps) => {
    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <MiroList
                    orgId={organization.id}
                    query={searchParams}
                />
            )}
        </div>
    );
};

export default DashBoardPage;