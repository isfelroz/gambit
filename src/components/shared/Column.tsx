import { useColumn } from '@/hooks/useColumn'

export default function Column(item: any) {
    const Component = useColumn(item._type)
    if (!Component) return null
    return <Component {...item} />
}
