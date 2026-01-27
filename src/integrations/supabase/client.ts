// Supabase temporariamente desabilitado
export const supabase = {
  from: () => ({
    insert: async () => ({ error: null }),
    select: async () => ({ data: [], error: null }),
  }),
};