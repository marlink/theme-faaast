'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Navigation } from '@/components/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ButtonGroup } from '@/components/ui/button-group';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { Switch as SwitchComponent } from '@/components/ui/switch';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Share2,
  Download,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Menu,
  Search,
  Filter,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Cog,
  Droplet,
  ChevronDown,
  ChevronRight,
  Eye,
  EyeOff,
  Smile,
  Calculator,
  CreditCard,
} from 'lucide-react';

export default function ComponentsShowcasePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [sliderValue, setSliderValue] = useState([50]);
  const [isOpen, setIsOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Component Showcase</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our design system components with various layouts and styles
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Form Elements Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Form Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Inputs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
              </CardContent>
            </Card>

            {/* Selects and Dropdowns */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="nl">Netherlands</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Service Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Wheel Repair</SelectItem>
                      <SelectItem value="coating">Powder Coating</SelectItem>
                      <SelectItem value="cnc">CNC Machining</SelectItem>
                      <SelectItem value="straightening">Wheel Straightening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Checkboxes and Radio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-base">Services Needed</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="repair" />
                      <label htmlFor="repair" className="text-sm">
                        Wheel Repair
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="coating" />
                      <label htmlFor="coating" className="text-sm">
                        Powder Coating
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cnc" />
                      <label htmlFor="cnc" className="text-sm">
                        CNC Machining
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-base">Priority Level</Label>
                  <RadioGroup defaultValue="normal">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal">Normal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">High</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Elements */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Interactive Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Button Styles & Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Basic Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Sizes (xs, sm, default, lg, xl, 2xl)</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="xs">XS</Button>
                    <Button size="sm">SM</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">LG</Button>
                    <Button size="xl">XL</Button>
                    <Button size="2xl">2XL</Button>
                  </div>
                </div>

                {/* Pill Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Pill Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="pill">Pill</Button>
                    <Button variant="pill-outline">Pill Outline</Button>
                  </div>
                </div>

                {/* Badge Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Badge Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="badge">Badge</Button>
                    <Button variant="badge-outline">Badge Outline</Button>
                  </div>
                </div>

                {/* Icon Left/Right */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Icons Left/Right</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button>
                      <Heart className="w-4 h-4" />
                      Left Icon
                    </Button>
                    <Button>
                      Right Icon
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm">
                      <Star className="w-3 h-3" />
                      Small
                    </Button>
                    <Button size="lg">
                      Large
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Icon Only Buttons */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Icon Only</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="icon">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="icon-sm">
                      <Pause className="w-3 h-3" />
                    </Button>
                    <Button size="icon-lg">
                      <SkipForward className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Destructive Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Destructive</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="destructive">Delete</Button>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Switches and Sliders */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Notifications</Label>
                  <Switch
                    id="notifications"
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Volume: {sliderValue[0]}%</Label>
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <Label>Progress</Label>
                  <Progress value={75} className="w-full" />
                </div>
              </CardContent>
            </Card>

            {/* Badges and Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>This is an informational alert.</AlertDescription>
                </Alert>
                <Alert className="border-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-destructive">
                    This is an error alert.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Tooltips and Popovers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tooltips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <TooltipProvider>
                  <div className="flex gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Get more information</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Settings and preferences</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <User className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>User profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Sample Dialog</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p>This is a modal dialog component.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Layout Components */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Layout Components</h2>

          {/* Tabs */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="services" className="mt-4">
                  <p>
                    Explore our wheel services including repair, powder coating, and CNC machining.
                  </p>
                </TabsContent>
                <TabsContent value="portfolio" className="mt-4">
                  <p>View our before and after transformations and completed projects.</p>
                </TabsContent>
                <TabsContent value="contact" className="mt-4">
                  <p>Get in touch for quotes and appointments.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="wheel-repair">
                  <AccordionTrigger>Wheel Repair Services</AccordionTrigger>
                  <AccordionContent>
                    We specialize in repairing all types of wheel damage including cracks, bends,
                    and cosmetic issues. Our expert technicians use advanced equipment to restore
                    your wheels to factory condition.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="powder-coating">
                  <AccordionTrigger>Powder Coating</AccordionTrigger>
                  <AccordionContent>
                    Professional powder coating in hundreds of colors with matte, glossy, and
                    metallic finishes. Our coating provides superior protection against corrosion
                    and UV damage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cnc-machining">
                  <AccordionTrigger>CNC Machining</AccordionTrigger>
                  <AccordionContent>
                    Precision CNC operations for custom wheel modifications. We can machine any
                    design with micron-level accuracy using state-of-the-art equipment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Data Table</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Price Range</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Wheel Repair</TableCell>
                    <TableCell>2-5 days</TableCell>
                    <TableCell>€50-€200</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Available</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Powder Coating</TableCell>
                    <TableCell>3-7 days</TableCell>
                    <TableCell>€100-€400</TableCell>
                    <TableCell>
                      <Badge>Available</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CNC Machining</TableCell>
                    <TableCell>5-10 days</TableCell>
                    <TableCell>€200-€800</TableCell>
                    <TableCell>
                      <Badge variant="outline">Limited</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>Carousel</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">1</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">2</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">3</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">4</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </section>

        {/* Card Layouts */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Card Layout Variations</h2>

          {/* 3 Cards in a Row */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Service Cards (3 Column Layout)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Wheel Repair</h4>
                  <p className="text-muted-foreground text-sm">
                    Expert repair of all wheel damage types with warranty.
                  </p>
                  <Button className="mt-4" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-orange-500 to-orange-700"></div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Powder Coating</h4>
                  <p className="text-muted-foreground text-sm">
                    Professional coating in hundreds of colors and finishes.
                  </p>
                  <Button className="mt-4" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-700"></div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">CNC Machining</h4>
                  <p className="text-muted-foreground text-sm">
                    Precision machining with micron-level accuracy.
                  </p>
                  <Button className="mt-4" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mixed Layout */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Mixed Card Layouts</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Text Only Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">About Our Process</h4>
                  <p className="text-muted-foreground mb-4">
                    We follow a meticulous process to ensure every wheel meets our high standards.
                    From initial inspection to final quality check, every step is carefully
                    executed.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quality guaranteed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card with Video Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                  <div className="text-center text-zinc-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-zinc-700 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Process Video</p>
                    <p className="text-xs">Click to play</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Our Workshop in Action</h4>
                  <p className="text-muted-foreground text-sm">
                    Watch our team in action as we transform damaged wheels into perfect
                    restorations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Feature Cards */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Feature Highlight Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h5 className="font-semibold mb-2">Quality Assured</h5>
                <p className="text-sm text-muted-foreground">Every job meets our standards</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h5 className="font-semibold mb-2">Fast Turnaround</h5>
                <p className="text-sm text-muted-foreground">Quick service without compromise</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h5 className="font-semibold mb-2">Expert Craftsmanship</h5>
                <p className="text-sm text-muted-foreground">Years of experience in every job</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h5 className="font-semibold mb-2">Customer Satisfaction</h5>
                <p className="text-sm text-muted-foreground">Happy customers every time</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Typography Showcase</h2>

          {/* Headings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>All Heading Levels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">Heading 1 (h1) - 4xl bold</h1>
                <p className="text-sm text-muted-foreground">
                  Used for main page titles and hero sections
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Heading 2 (h2) - 3xl bold</h2>
                <p className="text-sm text-muted-foreground">Used for section headers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Heading 3 (h3) - 2xl bold</h3>
                <p className="text-sm text-muted-foreground">Used for subsection headers</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Heading 4 (h4) - xl semibold</h4>
                <p className="text-sm text-muted-foreground">
                  Used for card titles and smaller sections
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2">Heading 5 (h5) - lg semibold</h5>
                <p className="text-sm text-muted-foreground">Used for component headers</p>
              </div>
              <div>
                <h6 className="text-base font-medium mb-2">Heading 6 (h6) - base medium</h6>
                <p className="text-sm text-muted-foreground">Used for small labels and metadata</p>
              </div>
            </CardContent>
          </Card>

          {/* Jumbo Display */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Jumbo Display Sizes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-5xl font-bold mb-2">Display 5xl - Jumbo Large</div>
                <p className="text-sm text-muted-foreground">
                  Perfect for hero banners and major announcements
                </p>
              </div>
              <div>
                <div className="text-6xl font-bold mb-2">Display 6xl - Extra Jumbo</div>
                <p className="text-sm text-muted-foreground">For maximum impact on landing pages</p>
              </div>
              <div>
                <div className="text-7xl font-bold mb-2">Display 7xl - Ultimate Jumbo</div>
                <p className="text-sm text-muted-foreground">
                  Reserved for the most important messages
                </p>
              </div>
              <div>
                <div className="text-8xl font-bold mb-2">Display 8xl - Mega Jumbo</div>
                <p className="text-sm text-muted-foreground">When you need to make a statement</p>
              </div>
            </CardContent>
          </Card>

          {/* Text Sizes and Weights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Text Sizes and Font Weights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-3">Font Sizes</h4>
                  <div className="space-y-2">
                    <p className="text-xs">Extra Small (xs) - 0.75rem</p>
                    <p className="text-sm">Small (sm) - 0.875rem</p>
                    <p className="text-base">Base (base) - 1rem</p>
                    <p className="text-lg">Large (lg) - 1.125rem</p>
                    <p className="text-xl">Extra Large (xl) - 1.25rem</p>
                    <p className="text-2xl">2XL - 1.5rem</p>
                    <p className="text-3xl">3XL - 1.875rem</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Font Weights</h4>
                  <div className="space-y-2">
                    <p className="font-thin">Thin (100)</p>
                    <p className="font-light">Light (300)</p>
                    <p className="font-normal">Normal (400)</p>
                    <p className="font-medium">Medium (500)</p>
                    <p className="font-semibold">Semibold (600)</p>
                    <p className="font-bold">Bold (700)</p>
                    <p className="font-extrabold">Extra Bold (800)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Section Layout Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Hero Section Example */}
              <div className="border border-border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Hero Section Example
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Transform Your <span className="text-blue-600">Wheels</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Professional wheel restoration services that bring your vehicle back to its
                    original glory. From powder coating to CNC machining, we handle it all.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg">Get Started</Button>
                    <Button variant="outline" size="lg">
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>

              {/* Feature Section Example */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
                  <p className="text-muted-foreground mb-4">
                    With over 15 years of experience, we provide top-quality wheel services that
                    exceed expectations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Expert craftsmanship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Premium materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Warranty included</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Service Highlights</h4>
                  <p className="text-sm text-muted-foreground">
                    Our comprehensive approach ensures every wheel receives the attention it
                    deserves, from initial assessment to final quality check.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Image + Text Layouts */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Image + Text Layouts</h2>

          {/* Image Left, Text Right */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Image Left, Text Right</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                    <Cog className="w-24 h-24" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">CNC Machining Process</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Precision CNC Machining</h3>
                  <p className="text-muted-foreground">
                    Our state-of-the-art CNC machines deliver unparalleled precision and
                    consistency. Each wheel is machined to exact specifications, ensuring perfect
                    fitment and performance.
                  </p>
                  <p className="text-muted-foreground">
                    We use advanced computer-aided design software combined with high-precision
                    machining equipment to create custom wheel modifications that other shops simply
                    can't match. Our CNC capabilities allow us to work with any alloy, any design,
                    and any complexity level.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button>Learn More</Button>
                    <Button variant="outline">View Gallery</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Right, Text Left */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Image Right, Text Left</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <h3 className="text-2xl font-bold">Powder Coating Excellence</h3>
                  <p className="text-muted-foreground">
                    Our powder coating process provides superior protection and stunning aesthetics.
                    Available in hundreds of colors and finishes, including matte, glossy, and
                    metallic options.
                  </p>
                  <p className="text-muted-foreground">
                    Unlike traditional paint, powder coating creates a durable, chip-resistant
                    finish that withstands harsh weather conditions and road debris. The
                    electrostatic application ensures even coverage and professional results every
                    time.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Benefits</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• UV Resistant</li>
                        <li>• Scratch Resistant</li>
                        <li>• Color Fast</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Finishes</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Matte</li>
                        <li>• Glossy</li>
                        <li>• Metallic</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden order-1 lg:order-2">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                    <Droplet className="w-24 h-24" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">Powder Coating Booth</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Width Image with Overlay Text */}
          <Card>
            <CardHeader>
              <CardTitle>Full Width Image with Overlay Text</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[16/6] bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-2xl text-white">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Transform Your Ride with Professional Care
                      </h3>
                      <p className="text-lg md:text-xl mb-6 text-white/90">
                        From damaged wheels to showroom condition, our expert technicians use
                        cutting-edge technology and traditional craftsmanship to deliver results
                        that exceed expectations. Every project is handled with precision and care.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90">
                          Get Free Quote
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-black"
                        >
                          View Our Work
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white/70 text-sm">
                  Professional Wheel Restoration
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Multi-Column Text Layouts */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Multi-Column Text Layouts</h2>

          {/* 2 Column Layout */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2 Column Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Wheel Repair Process</h3>
                  <p className="text-muted-foreground">
                    Our wheel repair process begins with a thorough inspection of the damaged wheel.
                    We assess the extent of the damage, including cracks, bends, and structural
                    issues that may affect the wheel's integrity and safety.
                  </p>
                  <p className="text-muted-foreground">
                    Once we've identified all damage, we create a detailed repair plan. This
                    includes determining the best repair techniques, materials needed, and estimated
                    timeline for completion. We always prioritize safety and structural integrity.
                  </p>
                  <p className="text-muted-foreground">
                    After repair, each wheel undergoes rigorous quality control testing to ensure it
                    meets our high standards and is safe for road use. We provide warranty coverage
                    on all our repair work.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Quality is at the heart of everything we do. Our certified technicians use
                    professional-grade equipment and follow industry best practices to deliver
                    consistent, reliable results.
                  </p>
                  <p className="text-muted-foreground">
                    We maintain detailed records of every repair, including before and after
                    measurements, materials used, and testing results. This documentation ensures
                    accountability and helps us continuously improve our processes.
                  </p>
                  <p className="text-muted-foreground">
                    Customer satisfaction is our ultimate goal. We work closely with each client to
                    understand their needs and deliver results that exceed expectations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3 Column Layout */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3 Column Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Powder Coating</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional powder coating in any color you desire. Our electrostatic
                    application ensures even coverage and superior durability compared to
                    traditional paint.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available in matte, glossy, and metallic finishes. UV-resistant and
                    chip-resistant for long-lasting protection against the elements.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">CNC Machining</h4>
                  <p className="text-sm text-muted-foreground">
                    Precision CNC operations for custom wheel modifications. Our advanced equipment
                    can handle any design complexity with micron-level accuracy.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    From simple lip machining to complex custom designs, we bring your vision to
                    life with computer-controlled precision and consistency.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Wheel Straightening</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional wheel straightening using hydraulic presses and specialized
                    equipment. We can restore bent wheels to factory specifications.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Advanced measurement techniques ensure perfect alignment and balance. Restored
                    wheels perform as well as new ones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4 Column Layout */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4 Column Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium">Stripping</h5>
                  <p className="text-xs text-muted-foreground">
                    Complete removal of old paint and coatings using environmentally friendly
                    methods.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Blasting</h5>
                  <p className="text-xs text-muted-foreground">
                    Professional media blasting for perfect surface preparation and adhesion.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Priming</h5>
                  <p className="text-xs text-muted-foreground">
                    Application of corrosion-resistant primers for optimal protection.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Curing</h5>
                  <p className="text-xs text-muted-foreground">
                    High-temperature curing for maximum durability and chemical resistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5 Column Layout */}
          <Card>
            <CardHeader>
              <CardTitle>5 Column Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <h6 className="text-xs font-medium">Consultation</h6>
                  <p className="text-xs text-muted-foreground">Initial assessment and quote</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">2</span>
                  </div>
                  <h6 className="text-xs font-medium">Preparation</h6>
                  <p className="text-xs text-muted-foreground">Stripping and surface prep</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                      3
                    </span>
                  </div>
                  <h6 className="text-xs font-medium">Processing</h6>
                  <p className="text-xs text-muted-foreground">Repair and coating application</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                      4
                    </span>
                  </div>
                  <h6 className="text-xs font-medium">Quality Check</h6>
                  <p className="text-xs text-muted-foreground">Final inspection and testing</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs font-bold text-red-600 dark:text-red-400">5</span>
                  </div>
                  <h6 className="text-xs font-medium">Delivery</h6>
                  <p className="text-xs text-muted-foreground">Pickup or shipping</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Links Showcase */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Links Showcase</h2>

          <Card>
            <CardHeader>
              <CardTitle>Different Link Styles and States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Inline Links */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Inline Text Links</h4>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    This is a paragraph with a{' '}
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 underline underline-offset-4"
                    >
                      primary link
                    </a>{' '}
                    that demonstrates how links appear within body text. Links should be clearly
                    distinguishable from regular text while maintaining readability.
                  </p>
                  <p className="text-muted-foreground">
                    For external links, we use the{' '}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
                    >
                      blue color scheme
                    </a>{' '}
                    to indicate they lead outside our site. This helps users understand the context
                    of where the link will take them.
                  </p>
                  <p className="text-muted-foreground">
                    Some links might be{' '}
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground underline underline-offset-4"
                    >
                      subtle and muted
                    </a>{' '}
                    to de-emphasize secondary actions or less important information.
                  </p>
                </div>
              </div>

              {/* Link Lists */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Link Lists and Navigation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-3">Footer Style Links</h5>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-3">Navigation Style Links</h5>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          Wheel Repair
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          Powder Coating
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          CNC Machining
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          Wheel Sales
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Links */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Call-to-Action Links</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Primary CTA</p>
                    <a
                      href="#"
                      className="text-orange-600 hover:text-orange-700 font-semibold text-lg"
                    >
                      Get Your Free Quote Today →
                    </a>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Secondary CTA</p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      View Our Portfolio →
                    </a>
                  </div>
                </div>
              </div>

              {/* Link States */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Link States Demonstration</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Default state:</p>
                    <a href="#" className="text-primary underline underline-offset-4">
                      Default link
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Hover state (hover over this link):
                    </p>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                    >
                      Hover link
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Visited state simulation:</p>
                    <a href="#" className="text-purple-600 underline underline-offset-4">
                      Visited link
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Active/Focus state:</p>
                    <a
                      href="#"
                      className="text-primary underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm px-1"
                    >
                      Focus link
                    </a>
                  </div>
                </div>
              </div>

              {/* Link with Icons */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Links with Icons</h4>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Find Location
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Missing Components Showcase */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Additional Components Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scroll Area */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scroll Area</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-32 w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <p>This is a scrollable area with custom scrollbar styling.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Separator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Separator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">Horizontal separator:</p>
                  <Separator />
                  <p className="text-sm">Vertical separator:</p>
                  <div className="flex items-center space-x-4">
                    <span>Item 1</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>Item 2</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>Item 3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Toggle Group */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Toggle Group</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">Single selection:</p>
                  <ToggleGroup type="single" defaultValue="bold">
                    <ToggleGroupItem value="bold" aria-label="Bold">
                      <span className="font-bold">B</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Italic">
                      <span className="italic">I</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Underline">
                      <span className="underline">U</span>
                    </ToggleGroupItem>
                  </ToggleGroup>

                  <p className="text-sm">Multiple selection:</p>
                  <ToggleGroup type="multiple" defaultValue={['bold']}>
                    <ToggleGroupItem value="bold" aria-label="Bold">
                      Bold
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Italic">
                      Italic
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Underline">
                      Underline
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            </Card>

            {/* Toast */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Toast Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    onClick={() =>
                      alert('Toast notifications are available via the useToast hook!')
                    }
                    className="w-full"
                  >
                    Show Alert (Toast Demo)
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Toast notifications are implemented using the useToast hook and appear in the
                    top-right corner.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Alert Dialog */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Alert Dialog</CardTitle>
              </CardHeader>
              <CardContent>
                <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Open Alert Dialog
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and
                        remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            {/* Avatar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Avatar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>XL</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border w-fit"
                />
              </CardContent>
            </Card>

            {/* Breadcrumb */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Breadcrumb</CardTitle>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Wheel Repair</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>

            {/* Collapsible */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Collapsible</CardTitle>
              </CardHeader>
              <CardContent>
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Toggle Content
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      This content is collapsible. You can show or hide it by clicking the button
                      above. This is useful for expandable sections and accordions.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Hover Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hover Card</CardTitle>
              </CardHeader>
              <CardContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@themefaaast</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>TF</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@themefaaast</h4>
                        <p className="text-sm">
                          Professional website development and digital solutions.
                        </p>
                        <div className="flex items-center pt-2">
                          <Calendar className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Joined December 2020
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>

            {/* Input OTP */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Input OTP</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter verification code</Label>
                  <InputOTP maxLength={6} id="otp">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-xs text-muted-foreground">
                    Enter the 6-digit code sent to your device.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pagination */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pagination</CardTitle>
              </CardHeader>
              <CardContent>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            {/* Skeleton */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skeleton Loading</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>

            {/* Spinner */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spinner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8">
                  <Spinner className="h-8 w-8" />
                </div>
              </CardContent>
            </Card>

            {/* Switch */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Switch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <SwitchComponent
                    id="airplane-mode"
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
              </CardContent>
            </Card>

            {/* Sheet */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sheet (Drawer)</CardTitle>
              </CardHeader>
              <CardContent>
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Open Sheet
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Sheet Example</SheetTitle>
                      <SheetDescription>
                        This is a sheet component that slides in from the side.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-4">
                      <p>
                        Sheet content goes here. You can put forms, navigation, or any other
                        content.
                      </p>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button>Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            {/* Command */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Command Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <Smile className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>Calculator</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </CommandItem>
                      <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                      </CommandItem>
                      <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Component showcase for ThemeFaaast design system
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
