"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface MiroListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
};

export const MiroList = ({
    orgId,
    query,
}: MiroListProps) => {
    const data = []; // TODO: Change to API call

    if (!data?.length && query.search) {
        return  <EmptySearch />;
    }

    if (!data?.length && query.favorites) {
        return <EmptyFavorites />;
    }

    if (!data?.length) {
        return <EmptyBoards />;
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    );
};