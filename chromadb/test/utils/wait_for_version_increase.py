import time
from chromadb.api import ClientAPI
from chromadb.test.conftest import COMPACTION_SLEEP

TIMEOUT_INTERVAL = 1


def get_collection_version(client: ClientAPI, collection_name: str) -> int:
    coll = client.get_collection(collection_name)
    return coll.get_model()["version"]


def wait_for_version_increase(
    client: ClientAPI,
    collection_name: str,
    initial_version: int,
    additional_time: int = 0,
) -> None:
    timeout = COMPACTION_SLEEP
    initial_time = time.time() + additional_time

    while get_collection_version(client, collection_name) == initial_version:
        time.sleep(TIMEOUT_INTERVAL)
        if time.time() - initial_time > timeout:
            raise TimeoutError("Model was not updated in time")
