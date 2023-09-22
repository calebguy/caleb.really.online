"use client"

import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

const queryClient = new QueryClient()

interface ProvidersProps extends PropsWithChildren {}

export default function Providers({children}: ProvidersProps) {
  return <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
}
