import Svg, { Path } from 'react-native-svg';


export default function Wallet({
  width = 16,
  height = 16,
  fill = "white"
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.3639 1.91422C8.86199 1.72542 9.40002 2.09501 9.40002 2.63336V4.66668H4.17335C3.40341 4.66668 2.69953 4.95857 2.16669 5.43736V5.2267C2.16669 4.64033 2.52556 4.12054 3.07008 3.9144L3.07022 3.91435L3.0703 3.91432L8.36341 1.9144L8.3639 1.91422ZM2.16669 7.67335V8.27334V12.16C2.16669 13.2639 3.0695 14.1667 4.17335 14.1667H11.8267C12.9305 14.1667 13.8334 13.2639 13.8334 12.16V11.8668H13.0659C12.1262 11.8668 11.2141 11.1797 11.1279 10.1646C11.074 9.58979 11.2929 9.05282 11.6721 8.6801C11.9493 8.39733 12.3102 8.21309 12.7068 8.15403C12.7984 8.14035 12.8919 8.13335 12.9867 8.13335H13.8334V7.67335C13.8334 6.56949 12.9305 5.66668 11.8267 5.66668H9.90334L9.90002 5.66669L9.8967 5.66668H4.17335C3.0695 5.66668 2.16669 6.56949 2.16669 7.67335ZM14.8334 12.16V11.765C15.2482 11.5817 15.5392 11.1707 15.5392 10.6868V9.31344C15.5392 8.82952 15.2482 8.41855 14.8334 8.23524V7.67335C14.8334 6.01721 13.4828 4.66668 11.8267 4.66668H10.4V2.63336C10.4 1.39848 9.16492 0.541403 8.00976 0.979024L8.00947 0.979134L2.71663 2.97895L2.71641 2.97903C1.78105 3.33295 1.16669 4.22649 1.16669 5.2267V7.67335V8.27334V12.16C1.16669 13.8161 2.51721 15.1667 4.17335 15.1667H11.8267C13.4828 15.1667 14.8334 13.8161 14.8334 12.16ZM14.3611 10.8668H14.3443L14.3334 10.8667H13.0667C12.5673 10.8667 12.1602 10.5018 12.125 10.0785L12.125 10.0785L12.1244 10.0726C12.0995 9.8108 12.1986 9.56427 12.376 9.39112L12.3849 9.38214C12.5076 9.25611 12.6686 9.17132 12.8522 9.1434C12.8956 9.13685 12.9402 9.13347 12.9859 9.13347H14.3611C14.4688 9.14042 14.5392 9.22469 14.5392 9.31344V10.6868C14.5392 10.7756 14.4688 10.8598 14.3611 10.8668ZM4.66669 7.50001C4.39054 7.50001 4.16669 7.72386 4.16669 8.00001C4.16669 8.27615 4.39054 8.50001 4.66669 8.50001H9.33335C9.6095 8.50001 9.83335 8.27615 9.83335 8.00001C9.83335 7.72386 9.6095 7.50001 9.33335 7.50001H4.66669Z" fill={fill} />
    </Svg>
  )
}