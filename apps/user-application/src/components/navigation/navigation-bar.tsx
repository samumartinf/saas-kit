import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Menu, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";
import { AccountDialog } from "@/components/auth/account-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "For VCs", href: "/#for-vcs" },
  { label: "Early Access", href: "/#early-access" },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { data: session } = authClient.useSession();

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/app",
    });
  };

  const user = session?.user;
  const fallbackText = user?.name
    ? user.name.charAt(0).toUpperCase()
    : user?.email?.charAt(0).toUpperCase() || "U";

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background 0.4s ease, border-color 0.4s ease",
    background: isScrolled ? "rgba(13,17,23,0.92)" : "transparent",
    backdropFilter: isScrolled ? "blur(12px)" : "none",
    borderBottom: isScrolled ? "1px solid rgba(245,240,232,0.08)" : "1px solid transparent",
  };

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Brand */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <span
              style={{
                fontFamily: "var(--rs-serif)",
                fontSize: "1.2rem",
                color: "var(--rs-paper)",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              ResearchSanity
            </span>
            <span
              style={{
                fontFamily: "var(--rs-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--rs-amber)",
                display: "block",
              }}
            >
              Early Access
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              style={{
                fontFamily: "var(--rs-sans)",
                fontSize: "0.85rem",
                color: "rgba(245,240,232,0.55)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--rs-paper)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.55)";
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth — desktop */}
        <div className="hidden lg:block">
          {session ? (
            <AccountDialog>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <Avatar className="h-7 w-7">
                  <AvatarImage src={user?.image || undefined} alt={user?.name || "User"} />
                  <AvatarFallback
                    style={{
                      background: "var(--rs-amber)",
                      color: "var(--rs-ink)",
                      fontSize: "0.7rem",
                      fontFamily: "var(--rs-mono)",
                    }}
                  >
                    {fallbackText}
                  </AvatarFallback>
                </Avatar>
                <span
                  style={{
                    fontFamily: "var(--rs-sans)",
                    fontSize: "0.85rem",
                    color: "var(--rs-paper)",
                  }}
                >
                  {user?.name || "Account"}
                </span>
              </button>
            </AccountDialog>
          ) : (
            <button
              onClick={handleGoogleSignIn}
              className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{
                fontFamily: "var(--rs-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "var(--rs-ink)",
                background: "var(--rs-amber)",
                border: "none",
                padding: "8px 18px",
                borderRadius: "2px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--rs-amber-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--rs-amber)";
              }}
            >
              <LogIn className="h-3.5 w-3.5" />
              Sign In
            </button>
          )}
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                style={{ color: "var(--rs-paper)" }}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              style={{
                width: "280px",
                background: "var(--rs-ink)",
                borderLeft: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <SheetHeader className="text-left pb-6">
                <SheetTitle
                  style={{
                    fontFamily: "var(--rs-serif)",
                    color: "var(--rs-paper)",
                    fontSize: "1.3rem",
                  }}
                >
                  ResearchSanity
                </SheetTitle>
                <SheetDescription
                  style={{
                    fontFamily: "var(--rs-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--rs-amber)",
                  }}
                >
                  Research Intelligence Platform
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-1 pb-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "var(--rs-sans)",
                      fontSize: "0.9rem",
                      color: "rgba(245,240,232,0.65)",
                      textDecoration: "none",
                      padding: "10px 12px",
                      borderRadius: "2px",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div
                style={{ borderTop: "1px solid rgba(245,240,232,0.08)", paddingTop: "1.5rem" }}
              >
                {session ? (
                  <div className="flex items-center gap-3 p-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user?.image || undefined} alt={user?.name || "User"} />
                      <AvatarFallback
                        style={{
                          background: "var(--rs-amber)",
                          color: "var(--rs-ink)",
                          fontFamily: "var(--rs-mono)",
                          fontSize: "0.75rem",
                        }}
                      >
                        {fallbackText}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--rs-sans)",
                          fontSize: "0.875rem",
                          color: "var(--rs-paper)",
                        }}
                      >
                        {user?.name || "User"}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--rs-mono)",
                          fontSize: "0.65rem",
                          color: "rgba(245,240,232,0.4)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {user?.email}
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full inline-flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "var(--rs-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--rs-ink)",
                      background: "var(--rs-amber)",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  >
                    <LogIn className="h-4 w-4" />
                    Sign In with Google
                  </button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
