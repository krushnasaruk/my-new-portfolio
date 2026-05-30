interface LiveProjectButtonProps {
  link?: string
}

export default function LiveProjectButton({ link = '#' }: LiveProjectButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer"
    >
      Live Project
    </a>
  )
}
