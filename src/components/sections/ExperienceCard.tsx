type ButtonPosition = "left" | "center" | "right";

type ExperienceCardProps = {
  title: string;
  subtitle?: string;
  description: string[];
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonPosition?: ButtonPosition;
};

export default function ExperienceCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "",
  buttonText,
  buttonLink = "#",
  buttonPosition = "left",
}: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="experience-card-content">
        <div>
          <h3>{title}</h3>
          {subtitle && <p className="experience-card-subtitle">{subtitle}</p>}
        </div>

        <div className="experience-card-description">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {buttonText && (
          <div className={`experience-card-actions ${buttonPosition}`}>
            <a href={buttonLink} className="btn-primary">
              {buttonText}
            </a>
          </div>
        )}
      </div>

      {imageSrc && (
        <div className="experience-card-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </article>
  );
}
