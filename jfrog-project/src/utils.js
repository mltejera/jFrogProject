
import { getRepoFiles, getFileStats } from './api'

export default async function getRepos(repoName, fileExtension) {
    try {

        let responseObject = await getRepoFiles(repoName)

        console.log(responseObject.results)

        let fileList = await findTopNResults(responseObject.results, fileExtension, 2)

        return fileList;

    } catch (error) {
        return error
    }
}

async function findTopNResults(repo, fileExtension, sizeOfTop) {

    try {
        var topResults = []
        var currentMin = -1

        for (var i = 0; i < repo.length; i++) {

            if (repo[i].name.toLowerCase().endsWith(fileExtension.toLowerCase())) {
                var file = await getFileStats(repo[i].repo, repo[i].path + "/" + repo[i].name)

                if (file.downloadCount > currentMin) {
                    // ordered insert
                    topResults.splice(file.downloadCount, 0, file)
                }

                // remove last element to keep further inserts fast
                if (topResults.length > sizeOfTop) {
                    topResults.shift()
                }

                currentMin = topResults[0].downloadCount
            }
        }
        return topResults

    } catch (error) {
        return error
    }
}

