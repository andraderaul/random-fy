import Link from 'next/link'

type CardType = {
  label: string
  href: string
}

export const Card = ({ label, href }: CardType) => (
  <Link href={href}>
    <a
      className="
        m-2
        w-72 p-6 border-2
  
        hover:shadow-lg 
        dark:shadow-neutral-700
        
        dark:border-neutral-900
        hover:border-spotifyGreen 
        rounded-lg 
        
        bg-white
        dark:bg-neutral-900
  
        hover:no-underline
        text-spotifyGreen font-semibold
        text-center
        
        transition-all duration-700
        "
    >
      {label}
    </a>
  </Link>
)
