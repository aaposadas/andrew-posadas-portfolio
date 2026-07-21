export type SpriteState =
  | "idle"
  | "thinking"
  | "speaking"
  | "wave"
  | "look-left"
  | "error";

type SpriteAvatarProps = {
  className?: string;
  state?: SpriteState;
};

export default function SpriteAvatar({
  className = "",
  state = "idle",
}: SpriteAvatarProps) {
  return (
    <div
      aria-label="Pixel art sprite of Andrew Posadas"
      className={`sprite-avatar sprite-avatar--${state} ${className}`}
      role="img"
    >
      <span className="sprite-avatar__sheet" />
    </div>
  );
}
