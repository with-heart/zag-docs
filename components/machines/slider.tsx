import * as slider from "@zag-js/slider"
import { useMachine, useSetup } from "@zag-js/react"
import { chakra } from "@chakra-ui/system"
import { Center, Flex } from "@chakra-ui/layout"

export function Slider(props: any) {
  const [state, send] = useMachine(
    slider.machine({ min: -50, max: 50, value: 20 }),
    { context: props.controls },
  )
  const ref = useSetup({ send, id: "1" })
  const api = slider.connect(state, send)

  return (
    <chakra.div width="240px" ref={ref} {...api.rootProps}>
      <Flex justify="space-between">
        <chakra.label mr="2" {...api.labelProps}>
          Quantity
        </chakra.label>
        <output {...api.outputProps}>
          <b>{api.value}</b>
        </output>
      </Flex>

      <Flex
        mt="5"
        align="center"
        position="relative"
        py="2.5"
        {...api.controlProps}
      >
        <chakra.div
          height="4px"
          rounded="full"
          flex="1"
          bg="gray.300"
          {...api.trackProps}
        >
          <chakra.div
            height="100%"
            bg="green.500"
            rounded="inherit"
            _disabled={{ bg: "green.200" }}
            {...api.rangeProps}
          />
        </chakra.div>
        <Center
          boxSize="20px"
          rounded="full"
          bg="white"
          shadow="base"
          className="focus-outline"
          _disabled={{ bg: "gray.200" }}
          {...api.thumbProps}
        >
          <input {...api.inputProps} />
        </Center>
      </Flex>
    </chakra.div>
  )
}
