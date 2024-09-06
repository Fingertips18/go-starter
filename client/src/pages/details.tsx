import {
  Button,
  Flex,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowLeft, PencilLine } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { AppRoutes } from "../constants/routes";
import { TodoService } from "../lib/service";
import { Todo } from "../lib/types";

const DetailsPage = () => {
  const { id } = useParams();

  const { data } = useQuery<Todo>({
    queryKey: ["todo"],
    queryFn: async () => await TodoService.getTodo(id!),
  });

  return (
    <Stack gap={8} mt={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <Link to={AppRoutes.Root}>
          <Tooltip label="Back">
            <Button cursor="pointer">
              <ArrowLeft size={20} />
            </Button>
          </Tooltip>
        </Link>
        <Tooltip label="Edit">
          <Button
            cursor="pointer"
            color={useColorModeValue("yellow.500", "yellow.200")}
          >
            <PencilLine size={20} />
          </Button>
        </Tooltip>
      </Flex>

      <Flex alignItems="center" gap={2}>
        <Text fontSize="2xl">Status:</Text>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={data?.completed ? "green.400" : "yellow"}
        >
          {data?.completed ? "Completed" : "Pending"}
        </Text>
      </Flex>

      <Text fontSize="lg">{data?.body}</Text>
    </Stack>
  );
};

export default DetailsPage;
