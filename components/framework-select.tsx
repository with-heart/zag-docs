import { HStack } from "@chakra-ui/layout"
import { Framework, useFramework } from "lib/framework"
import { useRouter } from "next/router"
import { chakra } from "@chakra-ui/system"

export function FrameworkSelect() {
  const { framework, setFramework } = useFramework()
  const { replace, asPath } = useRouter()

  return (
    <HStack>
      <chakra.label
        fontWeight="medium"
        htmlFor="framework-select"
        fontSize="sm"
      >
        Framework:{" "}
      </chakra.label>
      <chakra.select
        id="framework-select"
        fontSize="sm"
        fontWeight="semibold"
        color="green.500"
        defaultValue={framework}
        onChange={(event) => {
          const newFramework = event.currentTarget.value as Framework
          setFramework(newFramework)
          if (asPath.includes(framework) && newFramework !== framework) {
            const url = asPath.replace(framework, newFramework)
            replace(url)
          }
        }}
      >
        <option value="react">React</option>
        <option value="vue">Vue 3</option>
        <option value="solid">Solid.js</option>
      </chakra.select>
    </HStack>
  )
}
