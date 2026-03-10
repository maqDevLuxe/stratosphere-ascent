import { Link } from "react-router-dom";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-5 h-5 text-stratosphere" />
              <span className="font-display text-sm tracking-[0.3em] text-foreground">
                ALTITUDE ELITE
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The world's most exclusive private aviation training academy. Where ambition meets altitude.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 text-foreground">QUICK LINKS</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Fleet", "Admissions", "About"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-stratosphere transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 text-foreground">PROGRAMS</h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <span>Private Pilot License</span>
              <span>Commercial Pilot License</span>
              <span>Instrument Rating</span>
              <span>Type Ratings</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 text-foreground">CONTACT</h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stratosphere" />
                <span>admissions@altitudeelite.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stratosphere" />
                <span>+1 (800) 555-ELITE</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stratosphere" />
                <span>Scottsdale, Arizona</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs tracking-wider">
            © 2026 ALTITUDE ELITE AVIATION ACADEMY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-muted-foreground text-xs tracking-wider">
            <span className="hover:text-stratosphere transition-colors cursor-pointer">PRIVACY</span>
            <span className="hover:text-stratosphere transition-colors cursor-pointer">TERMS</span>
            <span className="hover:text-stratosphere transition-colors cursor-pointer">FAA COMPLIANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
