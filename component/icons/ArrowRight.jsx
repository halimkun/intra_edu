import Svg, { Path } from 'react-native-svg';

export default function ArrowRight({
  width = 12,
  height = 12,
  fill = "white"
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.23479 1.77484C4.08834 1.92129 4.08834 2.15873 4.23479 2.30517L7.49479 5.56517C7.73334 5.80373 7.73334 6.19629 7.49479 6.43484L4.23479 9.69484C4.08834 9.84129 4.08834 10.0787 4.23479 10.2252C4.38124 10.3716 4.61867 10.3716 4.76512 10.2252L8.02512 6.96517C8.55657 6.43373 8.55657 5.56629 8.02512 5.03484L4.76512 1.77484C4.61867 1.6284 4.38124 1.6284 4.23479 1.77484Z" fill={fill} />
    </Svg>
  )
}
