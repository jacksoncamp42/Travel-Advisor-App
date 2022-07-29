import React from 'react'
import {Flex, InputGroup, Input, InputRightElement, Menu, MenuButton, MenuList, MenuItem, Text} from "@chakra-ui/react"
import {Autocomplete} from "@react-google-maps/api"

import {BiChevronDown, BiHotel, BiMapAlt, BiRestaurant, BiSearch, BiStar} from 'react-icons/bi'
import { Rating } from "@material-ui/lab";

const Header = ({setType, setRatings, setCoordinates}) => {
  return (
  <Flex 
  position={'absolute'} 
  top={0} 
  left={0} 
  width={'full'}
  px={4} 
  py={2}
  zIndex={101}
  >
    <Flex>
      {/* <Autocomplete> */}
        <InputGroup width={'35vw'} shadow='lg'>
          <InputRightElement
            pointerEvents={"none"}>
              <BiSearch color="gray" fontSize={20}/>
          </InputRightElement>
          <Input 
          type={'text'} 
          placeholder = "Search Google Map..."
          variant = {'filled'}
          fontSize = {18}
          bg={'white'}
          color={'gray.700'}
          _hover={{bg: 'whiteAlpha.800'}}
          _focus ={{bg: 'whiteAlpha.800'}}
          _placeholder={{color: 'gray.700'}}
          />
        </InputGroup>
      {/* </Autocomplete> */}

      <Flex
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow="lg"
          cursor={'pointer'}
          _hover={{bg: 'gray.100'}}
          transition={'ease-in-out'}
          transitionDuration = {'0.3s'}
        >
          <Menu>
            <BiStar fontSize={25}/>
            <MenuButton mx={2} transition='all 0.2s' borderRadius={'md'}>
              Choose ratings
            </MenuButton>
            <MenuList>
              <MenuItem 
              display={'flex'} 
              alignItems={'center'} 
              justifyContent='space-around' 
              onClick={() => setRatings('')}>
                <Text fontSize={20} fontWeight={500} color={'gray.700'}>All Ratings</Text>
              </MenuItem>
              <MenuItem 
              display={'flex'} 
              alignItems={'center'} 
              justifyContent='space-around' 
              onClick={() => setRatings(2)}>
                <Text fontSize={20} fontWeight={500} color={'orange.700'}>
                  2.0
                </Text>
                <Rating size="small" value={2} readOnly />
              </MenuItem>
              <MenuItem 
              display={'flex'} 
              alignItems={'center'} 
              justifyContent='space-around' 
              onClick={() => setRatings(3)}>
                <Text fontSize={20} fontWeight={500} color={'orange.700'}>
                  3.0
                </Text>
                <Rating size="small" value={3} readOnly />
              </MenuItem>
              <MenuItem 
              display={'flex'} 
              alignItems={'center'} 
              justifyContent='space-around' 
              onClick={() => setRatings(4)}>
                <Text fontSize={20} fontWeight={500} color={'orange.700'}>
                  4.0
                </Text>
                <Rating size="small" value={4} readOnly />
              </MenuItem>
              <MenuItem 
              display={'flex'} 
              alignItems={'center'} 
              justifyContent='space-around' 
              onClick={() => setRatings(5)}>
                <Text fontSize={20} fontWeight={500} color={'orange.700'}>
                  4.5
                </Text>
                <Rating size="small" value={5} readOnly />
              </MenuItem>
            </MenuList>
          </Menu>
          <BiChevronDown fontSize={25}/>
        </Flex>

        {/* Restaurants */}
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow="lg"
          cursor={'pointer'}
          _hover={{bg: 'gray.100'}}
          transition={'ease-in-out'}
          transitionDuration = {'0.3s'}
          onClick={() => setType('restaurants')}
        >
          <BiRestaurant fontSize={25}/>     
          <Text ml={3} fontSize={16} fontWeight={500}>
            Restaurants
          </Text>     
        </Flex>

        {/* Hotels */}
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow="lg"
          cursor={'pointer'}
          _hover={{bg: 'gray.100'}}
          transition={'ease-in-out'}
          transitionDuration = {'0.3s'}
          onClick={() => setType('hotels')}
        >
          <BiHotel fontSize={25}/>     
          <Text ml={3} fontSize={16} fontWeight={500}>
            Hotels
          </Text>     
        </Flex>

        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow="lg"
          cursor={'pointer'}
          _hover={{bg: 'gray.100'}}
          transition={'ease-in-out'}
          transitionDuration = {'0.3s'}
          onClick={() => setType('attractions')}
        >
          <BiMapAlt fontSize={25}/>     
          <Text ml={3} fontSize={16} fontWeight={500}>
            Attractions
          </Text>     
        </Flex>
      </Flex>
    </Flex>
  </Flex>)
}

export default Header