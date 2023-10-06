"use client";

import { useState } from "react";
import useSWR from "swr";

import { useToast } from "../ui/use-toast";

import IdeaList from "./idealist";
import Summary from "./summary";
import { GetListIdeas } from "@/services/ideas";
import { ClientResponseError } from "pocketbase";

const Homepage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [formSearch, setFormSearch] = useState("");
  const [listPage, setListPage] = useState(1);

  const { data } = useSWR(
    {
      arg: {
        page: listPage,
        perPage: 8,
        options: searchQuery
          ? { filter: `title ~ "${searchQuery}"`, expand: "user" }
          : { expand: "user" },
      },
    },
    GetListIdeas,
    {
      onError: (err) => {
        if (err instanceof ClientResponseError) {
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: JSON.stringify(err.response, null, 2),
          });
        } else {
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: "Tolong coba lagi setelah beberapa saat.",
          });
        }
      },
    }
  );

  const onSearchSubmit = () => {
    setSearchQuery(formSearch);
  };

  return (
    <main className="p-y-4">
      <Summary data={data} />
      <IdeaList
        data={data}
        formSearch={formSearch}
        setListPage={setListPage}
        setFormSearch={setFormSearch}
        onSearchSubmit={onSearchSubmit}
      />
    </main>
  );
};

export default Homepage;
