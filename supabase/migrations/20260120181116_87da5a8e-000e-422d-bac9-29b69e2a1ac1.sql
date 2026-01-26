-- Create leads table for contact form submissions
CREATE TABLE public.leads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    nome_clinica TEXT NOT NULL,
    numero_profissionais TEXT NOT NULL,
    volume_leads TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public form)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public read access (admin only in future)
CREATE POLICY "No public read access" 
ON public.leads 
FOR SELECT 
USING (false);