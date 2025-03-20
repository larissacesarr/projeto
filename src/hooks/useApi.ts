import { useState } from "react";

export function useApi({ method, url }: { method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"; url: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<unknown>(null);

  const request = async (id?: string, body?: unknown) => {
    setLoading(true);
    setError(null);

    try {
      const fullUrl = id ? `${url}/${id}` : url;
      const response = await fetch(fullUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      });

      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      
      if (method === "DELETE" && response.status === 204) {
        setData(null); 
        return;
      }

      
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        setData(null); 
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error, data };
}