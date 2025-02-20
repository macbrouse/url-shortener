'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy,Check } from "lucide-react";
export function Landing(){

    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async () => {
        
        if (!url) 
            return
        setLoading(true);
        try {
            const response = await fetch ("https://url-shortener-egug.onrender.com/shorten",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({ tbShortened: url }),
            });
            const shortenedUrl = await response.text();
            setShortUrl(shortenedUrl);
        } 
        catch (error) {
            console.error("Error shortening URL:", error);
        }
        setLoading(false);
  };

  const handleCopy= async () => {
        if (shortUrl)  {
            try {
                await navigator.clipboard.writeText(shortUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
            catch (error) {
                console.error(error)
            }
        }
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg bg-gray-800 border border-gray-700">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">URL Shortener</h1>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-gray-700 text-gray-300 border border-gray-600 focus:ring-2 focus:ring-gray-500"
          />
          <Button onClick={handleSubmit} disabled={loading} className="w-full">
            {loading ? "Shortening..." : "Shorten URL"}
          </Button>
          {shortUrl && (
            <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg border border-gray-600">
              <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300">
                {shortUrl}
              </a>
              <div className="flex items-center space-x-2">
                {copied ? (
                  <Check className="text-green-400" />
                ) : (
                  <Copy
                    className="cursor-pointer text-gray-400 hover:text-gray-300"
                    onClick={handleCopy}
                  />
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}