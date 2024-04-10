import { useSection } from '@/hooks/useSection'

export default function Section(section: any) {
    console.log(section)
    const Component = useSection(section._type)
    if (!Component) return null
    return <Component {...section} />
}
