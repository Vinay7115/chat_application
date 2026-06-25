import { useThemeStore } from "../store/useThemeStore";
import { Palette, Check } from "lucide-react";

// All DaisyUI v4/v5 themes
const THEMES = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
  "night", "coffee", "winter", "dim", "nord", "sunset",
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Palette className="size-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-base-content/60 text-sm">Customize your chat experience</p>
          </div>
        </div>

        {/* Theme Section */}
        <div className="bg-base-200 rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Theme</h2>
            <p className="text-sm text-base-content/60">
              Choose a theme for your interface. Currently using:{" "}
              <span className="font-medium text-primary capitalize">{theme}</span>
            </p>
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group relative flex flex-col items-center gap-2 p-3 rounded-xl border-2
                  transition-all duration-200 hover:scale-105 cursor-pointer
                  ${theme === t
                    ? "border-primary shadow-md shadow-primary/20"
                    : "border-base-300 hover:border-primary/40"
                  }
                `}
                onClick={() => setTheme(t)}
                data-theme={t}
              >
                {/* Color swatch preview */}
                <div className="w-full grid grid-cols-4 gap-0.5 rounded-lg overflow-hidden h-8">
                  <div className="bg-primary" />
                  <div className="bg-secondary" />
                  <div className="bg-accent" />
                  <div className="bg-neutral" />
                </div>

                {/* Theme name */}
                <span className="text-xs font-medium capitalize text-center leading-tight">
                  {t}
                </span>

                {/* Selected indicator */}
                {theme === t && (
                  <div className="absolute top-1.5 right-1.5 size-4 bg-primary rounded-full flex items-center justify-center">
                    <Check className="size-2.5 text-primary-content" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="mt-6 bg-base-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <div className="bg-base-100 rounded-xl p-4 space-y-3 shadow-inner">
            {/* Sample chat bubbles */}
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">A</div>
              </div>
              <div className="chat-bubble">Hey! How are you? 👋</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="size-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">B</div>
              </div>
              <div className="chat-bubble chat-bubble-primary">
                I&apos;m doing great, thanks for asking! 😊
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">A</div>
              </div>
              <div className="chat-bubble">Want to grab coffee later? ☕</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
