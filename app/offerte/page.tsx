"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Upload } from "lucide-react"

export default function OffertePage() {
  const [showOtherService, setShowOtherService] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 5)
      setSelectedFiles(filesArray)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Request your free quote</h1>
            <p className="text-zinc-400 text-lg">
              Fill in the details below and upload photos of your wheels for an accurate price quote.
            </p>
          </div>

          <Card className="bg-zinc-100 border-zinc-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Contact Information</h2>

                  <div>
                    <Label htmlFor="name" className="text-zinc-900">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-zinc-900">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-zinc-900">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="06 12345678"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Service Details</h2>

                  <div>
                    <Label className="text-zinc-900 mb-3 block">Choose the desired service(s)</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="poedercoaten" />
                        <label htmlFor="poedercoaten" className="text-zinc-900 cursor-pointer">
                          Powder Coating
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cnc" />
                        <label htmlFor="cnc" className="text-zinc-900 cursor-pointer">
                          CNC Machining
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="richten" />
                        <label htmlFor="richten" className="text-zinc-900 cursor-pointer">
                          Straightening
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ontlakken" />
                        <label htmlFor="ontlakken" className="text-zinc-900 cursor-pointer">
                          Stripping & Blasting
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="reparatie" />
                        <label htmlFor="reparatie" className="text-zinc-900 cursor-pointer">
                          Repair
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="anders" onCheckedChange={(checked) => setShowOtherService(checked as boolean)} />
                        <label htmlFor="anders" className="text-zinc-900 cursor-pointer">
                          Other
                        </label>
                      </div>
                      {showOtherService && (
                        <Input
                          type="text"
                          className="bg-white border-zinc-300 text-zinc-900 mt-2"
                          placeholder="Describe the desired service"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Wheel Specifications</h2>

                  <div>
                    <Label htmlFor="aantal" className="text-zinc-900">
                      Number of wheels
                    </Label>
                    <Select>
                      <SelectTrigger id="aantal" className="bg-white border-zinc-300 text-zinc-900">
                        <SelectValue placeholder="Select number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="anders">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="maat" className="text-zinc-900">
                      Wheel size (in inches)
                    </Label>
                    <Select>
                      <SelectTrigger id="maat" className="bg-white border-zinc-300 text-zinc-900">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15"</SelectItem>
                        <SelectItem value="16">16"</SelectItem>
                        <SelectItem value="17">17"</SelectItem>
                        <SelectItem value="18">18"</SelectItem>
                        <SelectItem value="19">19"</SelectItem>
                        <SelectItem value="20">20"</SelectItem>
                        <SelectItem value="21">21"</SelectItem>
                        <SelectItem value="22+">22+"</SelectItem>
                        <SelectItem value="anders">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="merk" className="text-zinc-900">
                      Car/wheel brand and type (optional)
                    </Label>
                    <Input
                      id="merk"
                      type="text"
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="E.g. BMW 3-series, OZ Racing"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Upload Photos</h2>

                  <div>
                    <Label htmlFor="photos" className="text-zinc-900">
                      Upload photos of the damage or your current wheels (Max. 5 photos)
                    </Label>
                    <div className="mt-2">
                      <label
                        htmlFor="photos"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 mb-2 text-zinc-500" />
                          <p className="mb-2 text-sm text-zinc-700">
                            <span className="font-semibold">Click to upload</span> or drag files here
                          </p>
                          <p className="text-xs text-zinc-500">PNG, JPG or JPEG (MAX. 5 files)</p>
                        </div>
                        <input
                          id="photos"
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-zinc-700">{selectedFiles.length} file(s) selected:</p>
                        <ul className="text-xs text-zinc-600 mt-1">
                          {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-sm text-zinc-600 mt-2">Clear photos help us make the best quote.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Description</h2>

                  <div>
                    <Label htmlFor="description" className="text-zinc-900">
                      Additional comments or description of the damage/wish
                    </Label>
                    <Textarea
                      id="description"
                      rows={5}
                      className="bg-white border-zinc-300 text-zinc-900"
                      placeholder="Describe any specific wishes or details about the damage here..."
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6">
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
