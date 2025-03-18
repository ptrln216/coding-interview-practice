/* ------------------------------- Build Order ------------------------------ */

/**
 * Start must be a single file without any dependency.
 * Cycle means no valid build order.
 * Base on topological sort.
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string[]} projects
 * @param {[string, string][]} dependencies
 */
export function findBuildOrder(
  projects: string[],
  dependencies: [string, string][]
): string[] {
  const doneCheck = new Set<string>();
  const visiting = new Set<string>();
  const result: string[] = [];

  const depsMap = new Map<string, string[]>();
  for (const [dep, project] of dependencies) {
    if (!depsMap.has(project)) {
      depsMap.set(project, []);
    }
    depsMap.get(project)!.push(dep);
  }

  for (const project of projects) {
    if (!doneCheck.has(project)) {
      check(project, depsMap, visiting, doneCheck, result);
    }
  }

  return result;
}

function check(
  project: string,
  depsMap: Map<string, string[]>,
  visiting: Set<string>,
  doneCheck: Set<string>,
  result: string[]
) {
  if (visiting.has(project))
    throw new Error("Cycle detected! No valid build order.");

  if (!doneCheck.has(project)) {
    visiting.add(project);
    const deps = depsMap.get(project);
    if (deps) {
      for (let dep of deps) {
        check(dep, depsMap, visiting, doneCheck, result);
      }
    }
    visiting.delete(project);
    doneCheck.add(project);
    result.push(project);
  }
}
