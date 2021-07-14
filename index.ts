import {Octokit} from "@octokit/rest";
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import {components} from "@octokit/openapi-types";

const o = new Octokit();

type GetContentData = GetResponseDataTypeFromEndpointMethod<typeof o.repos.getContent>;
type FileContent = components["schemas"]["content-file"];

async function getFileContent(repo: string): Promise<string> {
    const {data: data} = await o.repos.getContent({
        owner: "sokolas",
        repo: "alexandra",
        path: "pom.xml"
    });
    if (/* data is a FileContent??? */) {
        return data.content;
    }
    
}